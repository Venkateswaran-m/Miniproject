package com.opportunities;



import java.sql.ResultSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class OpportunityRepository {
	
	
	@Autowired
	JdbcTemplate jdbcTemplate;

	private final String GET_ALL="SELECT * FROM opportunity";
	private final String INSERT_OPPORTUNITY="INSERT INTO opportunity(opportunity_name,experience,hiring_manger,skill,creator,creator_email,job_location,joining_date,updated_date) values(?,?,?,?,?,?,?,?,?)";
	private final String UPDATE_OPPORTUNITY= "UPDATE opportunity set opportunity_name=?,experience=?,hiring_manger=?,skill=?,creator=?,creator_email=?,job_location=?,joining_date=?,updated_date=? WHERE id=?";
	private final String DELETE_OPPORTUNITY= "DELETE FROM opportunity WHERE id = ?";
	private RowMapper<Opportunity> rowMapper=(ResultSet rs, int rowNUM) -> {
		Opportunity emp = new Opportunity();
		emp.setId(rs.getInt(1));
		emp.setOpportunity_name(rs.getString(2));
		emp.setExperience(rs.getInt(3));
		emp.setHiring_manager(rs.getString(4));
		emp.setSkill(rs.getString(5));
		emp.setCreator(rs.getString(6));
		emp.setCreator_email(rs.getString(7));
		emp.setJob_location(rs.getString(8));
		emp.setJoining_date(rs.getString(9));
		emp.setUpdated_date(rs.getString(10));
		
		return emp;
	};
	
	public List<Opportunity> findAll() {
		return jdbcTemplate.query(GET_ALL,rowMapper);
	}
	

	public boolean addOpportunity(Opportunity o) {
		if(jdbcTemplate.update(INSERT_OPPORTUNITY,o.getOpportunity_name(),o.getExperience(),o.getHiring_manager(),o.getSkill(),o.getCreator(),o.getCreator_email(),o.getJob_location(),o.getJoining_date(),o.getUpdated_date())>0)
			return true;
		else {
			return false;
		}
	}

	
	public boolean updateOpportunity(Opportunity o) {
		if(jdbcTemplate.update(UPDATE_OPPORTUNITY,o.getOpportunity_name(),o.getExperience(),o.getHiring_manager(),o.getSkill(),o.getCreator(),o.getCreator_email(),o.getJob_location(),o.getJoining_date(),o.getUpdated_date(),o.getId())>0)
			return true;
		else {
			return false;
		}
		}
	public boolean deleteOpportunity(int id) {
		if(jdbcTemplate.update(DELETE_OPPORTUNITY,id)>0)
			return true;
		else {
			return false;
		
		}
	}
		

	
	

}