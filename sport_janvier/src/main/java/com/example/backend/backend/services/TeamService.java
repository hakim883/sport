package com.example.backend.backend.services;

import java.util.List;

import com.example.backend.backend.models.Team;

public interface TeamService {
	public List<Team> getAllTeams();

	public Team getTeamById(Long id);

	public Team addTeam(Team m);

	public Team updateTeam(Team m);

	public void deleteTeam(Long id);
}
