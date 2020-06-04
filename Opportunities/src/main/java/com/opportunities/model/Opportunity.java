package com.opportunities.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Opportunity {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String opportunityName;
	private String hiringManager;
	private String managerEmail;
	private String contactNumber;
	private String location;
	private String skills;
	private String expectedDuration;
	
	public Opportunity() {}

	public Opportunity(int id, String opportunityName, String hiringManager, String managerEmail, String contactNumber,
			String location, String skills, String expectedDuration) {
		super();
		this.id = id;
		this.opportunityName = opportunityName;
		this.hiringManager = hiringManager;
		this.managerEmail = managerEmail;
		this.contactNumber = contactNumber;
		this.location = location;
		this.skills = skills;
		this.expectedDuration = expectedDuration;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getOpportunityName() {
		return opportunityName;
	}

	public void setOpportunityName(String opportunityName) {
		this.opportunityName = opportunityName;
	}

	public String getHiringManager() {
		return hiringManager;
	}

	public void setHiringManager(String hiringManager) {
		this.hiringManager = hiringManager;
	}

	public String getManagerEmail() {
		return managerEmail;
	}

	public void setManagerEmail(String managerEmail) {
		this.managerEmail = managerEmail;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public String getExpectedDuration() {
		return expectedDuration;
	}

	public void setExpectedDuration(String expectedDuration) {
		this.expectedDuration = expectedDuration;
	}

	@Override
	public String toString() {
		return "Opportunity [id=" + id + ", opportunityName=" + opportunityName + ", hiringManager=" + hiringManager
				+ ", managerEmail=" + managerEmail + ", contactNumber=" + contactNumber + ", location=" + location
				+ ", skills=" + skills + ", expectedDuration=" + expectedDuration + "]";
	}




}


	
	
	
	


	