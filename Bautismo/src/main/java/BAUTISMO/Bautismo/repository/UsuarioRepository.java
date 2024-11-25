package BAUTISMO.Bautismo.repository;

import BAUTISMO.Bautismo.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByCorreo(String correo);
    // Puedes definir métodos adicionales si es necesario
}
