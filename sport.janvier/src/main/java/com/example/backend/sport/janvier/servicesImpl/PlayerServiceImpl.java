package com.example.backend.sport.janvier.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.sport.janvier.models.Player;
import com.example.backend.sport.janvier.repositories.PlayerRepository;
import com.example.backend.sport.janvier.services.PlayerService;

@Service
public class PlayerServiceImpl implements PlayerService {
	
	

	@Autowired
	private PlayerRepository playerRepo;
	@Override
	public Player addPlayer(Player P) {
		// TODO Auto-generated method stub
		//.save c'est a dire insert into database
		return playerRepo.save(P);
	}
	@Override
	public List<Player> getAllPlayers() {
		// TODO Auto-generated method stub
		return playerRepo.findAll();
	}
@Override
	public Player getPlayerById(Long id) {
		// TODO Auto-generated method stub
		//matchrepo wasta bin base w ..
		Optional<Player> P = playerRepo.findById(id);
		return P.isPresent()?P.get():null;
		
	}
	@Override
	public Player editPlayer(Player P) {
		// TODO Auto-generated method stub
		return playerRepo.save(P);
	}
	@Override
	public void deletePlayerById(Long id) {
		// TODO Auto-generated method stub
		playerRepo.deleteById(id);
	}
	@Override
	public List<Player> getAllPlayres() {
		// TODO Auto-generated method stub
		return null;
	}

}
