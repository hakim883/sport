package com.example.backend.sport.janvier.services;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
public interface UserDetailsService {
    UserDetails loadUserByEmail(String email) throws UsernameNotFoundException;

}
