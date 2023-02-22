package com.example.backend.sport.janvier.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.sport.janvier.models.Matche;
import com.example.backend.sport.janvier.repositories.MatchRepository;
import com.example.backend.sport.janvier.services.MatchService;
@Service

public class MatchServiceImpl implements MatchService {

	@Autowired
	private MatchRepository matchRepo;
	@Override
	public Matche addMatch(Matche m) {
		// TODO Auto-generated method stub
		//.save c'est a dire insert into database
		return matchRepo.save(m);
	}

	@Override
	public List<Matche> getAllMatches() {
		// TODO Auto-generated method stub
		return matchRepo.findAll();
	}

	@Override
	public Matche getMatchById(Long id) {
		// TODO Auto-generated method stub
		//matchrepo wasta bin base w ..
		Optional<Matche> m = matchRepo.findById(id);
		return m.isPresent()?m.get():null;
		
	}

	@Override
	public Matche editMatch(Matche m) {
		// TODO Auto-generated method stub
		return matchRepo.save(m);
	}

	@Override
	public void deleteMatchById(Long id) {
		// TODO Auto-generated method stub
		matchRepo.deleteById(id);
		
	}

}
