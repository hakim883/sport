package com.example.backend.backend.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.backend.models.Team;
import com.example.backend.backend.repositories.TeamRepository;
import com.example.backend.backend.services.TeamService;

@Service
public class TeamServiceImpl implements TeamService {

	@Autowired
	private TeamRepository teamRepository;
	@Override
	public List<Team> getAllTeams() {
		// TODO Auto-generated method stub
		return teamRepository.findAll();
	}

	@Override
	public Team getTeamById(Long id) {
		// TODO Auto-generated method stub
		Optional<Team> t = teamRepository.findById(id);
		return t.isPresent() ? t.get() : null;
	}

	@Override
	public Team addTeam(Team t) {
		// TODO Auto-generated method stub
		return teamRepository.save(t);
	}

	@Override
	public Team updateTeam(Team t) {
		// TODO Auto-generated method stub
		return teamRepository.save(t);

	}

	@Override
	public void deleteTeam(Long id) {
		teamRepository.deleteById(id);
	}

}
