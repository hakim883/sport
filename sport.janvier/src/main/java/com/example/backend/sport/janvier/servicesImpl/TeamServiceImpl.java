package com.example.backend.sport.janvier.servicesImpl;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Service;

import com.example.backend.sport.janvier.models.Team;
import com.example.backend.sport.janvier.repositories.TeamRepository;
import com.example.backend.sport.janvier.services.PlayerService;
import com.example.backend.sport.janvier.services.TeamService;
@Service
public class TeamServiceImpl implements TeamService {
	

	@Autowired
	private TeamRepository teamRepo;
	@Override
	public Team addTeam(Team T) {
		// TODO Auto-generated method stub
		//.save c'est a dire insert into database
		return teamRepo.save(T);
	}

	@Override
	public List<Team> getAllTeams() {
		// TODO Auto-generated method stub
		return teamRepo.findAll();
	}

	@Override
	public Team getTeamById(Long id) {
		// TODO Auto-generated method stub
		//matchrepo wasta bin base w ..
		Optional<Team> T = teamRepo.findById(id);
		return T.isPresent()?T.get():null;
		
	}

	@Override
	public Team editTeam(Team T) {
		// TODO Auto-generated method stub
		return teamRepo.save(T);
	}

	@Override
	public void deleteTeamById(Long id) {
		// TODO Auto-generated method stub
		teamRepo.deleteById(id);
		
	}

	

}
