package com.opportunities;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.any;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.apache.catalina.mapper.Mapper;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.RowMapperResultSetExtractor;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.util.NestedServletException;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.opportunities.controller.OpportunityController;
import com.opportunities.dao.OpportunityDao;
import com.opportunities.daoImpl.OpportunityDAOCustomImpl;
import com.opportunities.exceptions.ResourceNotFoundException;
import com.opportunities.model.LocationCount;
import com.opportunities.model.Opportunity;
import com.opportunities.service.OpportunityService;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringRunner.class)
@SpringBootTest
class OpportunitiesApplicationTests {


	@Autowired
	private WebApplicationContext webApplicationContext;

	@Autowired
	private OpportunityService service;
	@MockBean
	private OpportunityDao repository;
	
	
	@Mock
	private JdbcTemplate jdbc;
	@Autowired
	private OpportunityController controller;
	@InjectMocks
	private OpportunityDAOCustomImpl dao;
	
	 
	
	public static Opportunity createOpportunityForTest() {
		Opportunity o = new Opportunity();
		o.setContactNumber("9842422597");
		o.setExpectedDuration("12");
		o.setHiringManager("venkat");
		o.setId(1);
		o.setLocation("chennai");
		o.setManagerEmail("venkat@gmail.com");
		o.setOpportunityName("developer");
		o.setSkills("Java");
		return o;
	}
	
	
	@Test
	public void contexLoads() throws Exception {
		assertThat(controller).isNotNull();
	}
	
	
	


	// Service layer

	@Test
	void contextLoads() {
	}

	@Test
	public void getOpportunitiesTest() {
		when(repository.getAllOpportunities()).thenReturn(Stream.of(
				new Opportunity(1, "Developer", "Venkat", "managerEmail", "contactNumber", "location", "skills", "32"),
				new Opportunity(2, "opportunityName", "hiringManager", "managerEmail", "contactNumber", "location",
						"skills", "expectedDuration"))
				.collect(Collectors.toList()));
		assertEquals(2, service.getOpportunities().size());
	}

	@Test
	public void deleteOpportunityTest() {
		Opportunity o = createOpportunityForTest();
		service.deleteOpportunity(1);
		verify(repository, times(1)).deleteById(1);

	}

	@Test
	public void addOpportunityTest() {
		Opportunity o = createOpportunityForTest();
		when(repository.addOpportunity(o)).thenReturn(true);
		assertEquals("Success", service.addOpportunity(o));
	}

	@Test
	public void updateOpportunityTest() {
		Opportunity o = createOpportunityForTest();
		when(repository.updateOpportunity(o)).thenReturn(true);
		assertEquals("Inserted SucessFully", service.updateOpportunity(o));
	}

	@Test
	public void getLocationCountTest() {

		when(repository.getLocation())
				.thenReturn(Stream.of(new LocationCount("chennai", 5)).collect(Collectors.toList()));
		assertEquals(1, service.getLocation().size());
	}

	// Dao

	@Test
	public void getAllOpportunitiesTest() {
		Opportunity o = createOpportunityForTest();

		List<Opportunity> opportunityList = new ArrayList<Opportunity>();
		opportunityList.add(o);
		Mockito.when(jdbc.query(ArgumentMatchers.anyString(), ArgumentMatchers.any(RowMapper.class)))
				.thenReturn(opportunityList);
		List<Opportunity> list = dao.getAllOpportunities();
		assertEquals(1, list.size());
	}

	@Test
	public void addOpportunityDaoTest() {
		Opportunity o = createOpportunityForTest();

		Mockito.when(
				jdbc.update(ArgumentMatchers.anyString(), ArgumentMatchers.anyString(), ArgumentMatchers.anyString(),
						ArgumentMatchers.anyString(), ArgumentMatchers.anyString(), ArgumentMatchers.anyString(),
						ArgumentMatchers.anyString(), ArgumentMatchers.anyString(), ArgumentMatchers.anyInt()))
				.thenReturn(1);

		dao.addOpportunity(o);
		verify(jdbc, times(1)).update(ArgumentMatchers.anyString(), ArgumentMatchers.anyString(),
				ArgumentMatchers.anyString(), ArgumentMatchers.anyString(), ArgumentMatchers.anyString(),
				ArgumentMatchers.anyString(), ArgumentMatchers.anyString(), ArgumentMatchers.anyString(),
				ArgumentMatchers.anyInt());

	}

	@Test
	public void updateJobTest() {
		Opportunity o = createOpportunityForTest();
		Mockito.when(
				jdbc.update(ArgumentMatchers.anyString(), ArgumentMatchers.anyString(), ArgumentMatchers.anyString(),
						ArgumentMatchers.anyString(), ArgumentMatchers.anyString(), ArgumentMatchers.anyString(),
						ArgumentMatchers.anyString(), ArgumentMatchers.anyString(), ArgumentMatchers.anyInt()))
				.thenReturn(1);

		dao.updateOpportunity(o);
		verify(jdbc, times(1)).update(ArgumentMatchers.anyString(), ArgumentMatchers.anyString(), ArgumentMatchers.anyString(),
				ArgumentMatchers.anyString(), ArgumentMatchers.anyString(), ArgumentMatchers.anyString(),
				ArgumentMatchers.anyString(), ArgumentMatchers.anyString(), ArgumentMatchers.anyInt());

	}
	
	@Test
	public void getDaoLocationCountTest() {

		when(dao.getLocation())
				.thenReturn(Stream.of(new LocationCount("chennai", 5)).collect(Collectors.toList()));
		assertEquals(1, dao.getLocation().size());
	}
	
	
}
