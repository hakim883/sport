package com.example.backend.sport.janvier.services;

import java.util.List;


import com.example.backend.sport.janvier.models.Matche;

public interface MatchService {
	
	public Matche addMatch(Matche m);
	public List<Matche> getAllMatches();
	public Matche getMatchById(Long id);
	public void deleteMatchById(Long id);
	public Matche editMatch(Matche m);

}
