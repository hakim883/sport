package com.example.backend.backend.services;

import java.util.List;

import com.example.backend.backend.models.Matche;

public interface MatchService {

	public List<Matche> getAllMatches();

	public Matche getMatchById(Long id);

	public Matche addMatch(Matche m);

	public Matche updateMatch(Matche m);

	public void deleteMatch(Long id);
}
