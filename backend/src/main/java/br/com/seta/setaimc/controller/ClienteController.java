package br.com.seta.setaimc.controller;

import br.com.seta.setaimc.model.Cliente;
import br.com.seta.setaimc.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cliente")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @RequestMapping(method = RequestMethod.GET)
    public Page<Cliente> listar(Pageable pageable) {
        return clienteRepository.findAll(pageable);
    }

    @RequestMapping(value = "/{id}")
    public Cliente buscar(@PathVariable("id") Integer id) {
        return clienteRepository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Cliente salvar(Cliente cliente) {
        return clienteRepository.save(cliente);
    }
}
