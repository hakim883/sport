package com.example.backend.sport.janvier.models;

public class Player {

	private Long id;
	private String name;
	private String position;
	private int age;
	private int numero;
	public Player() {
		// TODO Auto-generated constructor stub
	}
	public Player(String name, String position, int age, int numero) {
		super();
		this.name = name;
		this.position = position;
		this.age = age;
		this.numero = numero;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	@Override
	public String toString() {
		return "Player [id=" + id + ", name=" + name + ", position=" + position + ", age=" + age + ", numero=" + numero
				+ "]";
	}
	
	
	
	
}
