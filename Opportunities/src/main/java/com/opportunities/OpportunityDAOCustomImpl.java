package com.opportunities;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class OpportunityDAOCustomImpl implements OpportunityDAOCustom{



	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public List<Opportunity> getAllOpportunities()
	{
		 return jdbcTemplate.query(
	                "select * from opportunity",
	                (rs, rowNum) ->
	                        new Opportunity(
	                        		 rs.getInt("id"),
	                        	 rs.getString("opportunity_name"),
	                                rs.getString("hiring_manager"),
	                               rs.getString("manager_email"),
	                               rs.getString("location"),
	                               rs.getString("contact_number"),
	                               rs.getString("skills"),
	                               rs.getString("expected_duration")                        
	                        )
	        );
	}

}