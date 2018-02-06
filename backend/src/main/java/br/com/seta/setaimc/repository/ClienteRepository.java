package br.com.seta.setaimc.repository;

import br.com.seta.setaimc.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
