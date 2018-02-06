package br.com.seta.setaimc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.seta.setaimc.model.User;

public interface UserRepository extends JpaRepository<User, String> {

    User findByUsername(String username);
}
