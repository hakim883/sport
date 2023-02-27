package com.example.backend.sport.janvier.services;

import java.util.List;

import com.example.backend.sport.janvier.models.Team;

public interface TeamService {
	
	public Team addTeam(Team T);
	public List<Team> getAllTeams();
	public Team getTeamById(Long id);
	public void deleteTeamById(Long id);
	public Team editTeam(Team T);

}
