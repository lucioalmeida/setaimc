package br.com.seta.setaimc.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import br.com.seta.setaimc.model.User;
import br.com.seta.setaimc.repository.UserRepository;

@Service(value = "userDetailsService")
public class UserServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User userByUsername = userRepository.findByUsername(username);
        if (userByUsername == null) {
            throw new UsernameNotFoundException("Usuario nao encontrado");
        }
        return userByUsername;
    }
}
