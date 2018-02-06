package br.com.seta.setaimc.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "CLIENTE")
@Data
public class Cliente {

    @Id
    @SequenceGenerator(name = "ID_CLIENTE", allocationSize = 1, sequenceName = "GEN_CLIENTE")
    private Integer id;

    @Column(name = "NOME")
    private String nome;
}
