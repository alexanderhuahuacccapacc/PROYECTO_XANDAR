package BAUTISMO.Bautismo.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bautismos")
public class Bautismo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Date fecha;

    @Column(nullable = false, length = 100)
    private String lugar;

    @Column(nullable = false, length = 100)
    private String pastorEncargado;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario;

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Date getFecha() { return fecha; }
    public void setFecha(Date fecha) { this.fecha = fecha; }

    public String getLugar() { return lugar; }
    public void setLugar(String lugar) { this.lugar = lugar; }

    public String getPastorEncargado() { return pastorEncargado; }
    public void setPastorEncargado(String pastorEncargado) { this.pastorEncargado = pastorEncargado; }

    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }
}
