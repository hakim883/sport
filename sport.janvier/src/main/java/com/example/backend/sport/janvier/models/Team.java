package com.example.backend.sport.janvier.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TEAMS")

public class Team {

	@Id
	@Column(name = "TEAM_ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;

	// TODO Auto-generated constructor stub

	@Override
	public String toString() {
		return "Team [name=" + name + "]";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Team(String name) {

		this.name = name;
	}
	public Team() {
	}

}
