package com.example.backend.sport.janvier.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="MATCHES")
public class Matche {
	@Id
	@Column(name="MATCH_ID")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String teamOne;
	private String teamTwo;
	private int scoreOne;
	private int scoreTwo;
	public Matche() {
		
		// TODO Auto-generated constructor stub
	}
	public Matche(String teamOne, String teamTwo, int scoreOne, int scoreTwo) {
		super();
		this.teamOne = teamOne;
		this.teamTwo = teamTwo;
		this.scoreOne = scoreOne;
		this.scoreTwo = scoreTwo;
	}
	public String getTeamOne() {
		return teamOne;
	}
	public void setTeamOne(String teamOne) {
		this.teamOne = teamOne;
	}
	public String getTeamTwo() {
		return teamTwo;
	}
	public void setTeamTwo(String teamTwo) {
		this.teamTwo = teamTwo;
	}
	public int getScoreOne() {
		return scoreOne;
	}
	public void setScoreOne(int scoreOne) {
		this.scoreOne = scoreOne;
	}
	public int getScoreTwo() {
		return scoreTwo;
	}
	public void setScoreTwo(int scoreTwo) {
		this.scoreTwo = scoreTwo;
	}
	@Override
	public String toString() {
		return "Matche [id=" + id + ", teamOne=" + teamOne + ", teamTwo=" + teamTwo + ", scoreOne=" + scoreOne
				+ ", scoreTwo=" + scoreTwo + "]";
	}
	
	

}
