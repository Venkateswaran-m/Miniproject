package com.opportunities;

public class Opportunity {

	
	private int id ;
	private String opportunity_name ;
	private int experience ;
	private String hiring_manager ;
	private String skill ;
	private String creator ;
	private String creator_email ;
	private String job_location;
	private String joining_date;
	private String updated_date;
	public Opportunity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Opportunity(int id, String opportunity_name, int experience, String hiring_manager, String skill,
			String creator, String creator_email, String job_location, String joining_date, String updated_date) {
		super();
		this.id = id;
		this.opportunity_name = opportunity_name;
		this.experience = experience;
		this.hiring_manager = hiring_manager;
		this.skill = skill;
		this.creator = creator;
		this.creator_email = creator_email;
		this.job_location = job_location;
		this.joining_date = joining_date;
		this.updated_date = updated_date;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOpportunity_name() {
		return opportunity_name;
	}
	public void setOpportunity_name(String opportunity_name) {
		this.opportunity_name = opportunity_name;
	}
	public int getExperience() {
		return experience;
	}
	public void setExperience(int experience) {
		this.experience = experience;
	}
	public String getHiring_manager() {
		return hiring_manager;
	}
	public void setHiring_manager(String hiring_manager) {
		this.hiring_manager = hiring_manager;
	}
	public String getSkill() {
		return skill;
	}
	public void setSkill(String skill) {
		this.skill = skill;
	}
	public String getCreator() {
		return creator;
	}
	public void setCreator(String creator) {
		this.creator = creator;
	}
	public String getCreator_email() {
		return creator_email;
	}
	public void setCreator_email(String creator_email) {
		this.creator_email = creator_email;
	}
	public String getJob_location() {
		return job_location;
	}
	public void setJob_location(String job_location) {
		this.job_location = job_location;
	}
	public String getJoining_date() {
		return joining_date;
	}
	public void setJoining_date(String joining_date) {
		this.joining_date = joining_date;
	}
	public String getUpdated_date() {
		return updated_date;
	}
	public void setUpdated_date(String updated_date) {
		this.updated_date = updated_date;
	}
	
	
	
	
	
}