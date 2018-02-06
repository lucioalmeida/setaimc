package br.com.seta.setaimc.model;

import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "USUARIO")
public class User implements UserDetails {

    @Id
    private String username;

    private String nome;

    private String password;

    private boolean enabled;

    private boolean accountNonExpired;

    private boolean accountNonLocked;

    private boolean credentialsNonExpired;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "USER_ROLE", joinColumns = @JoinColumn(name = "USUARIO"), inverseJoinColumns = @JoinColumn(name = "AUTHORITY"))
    private List<Role> authorities;

    public User() {
    }

    public String getUsername() {
        return this.username;
    }

    public String getNome() {
        return this.nome;
    }

    public String getPassword() {
        return this.password;
    }

    public boolean isEnabled() {
        return this.enabled;
    }

    public boolean isAccountNonExpired() {
        return this.accountNonExpired;
    }

    public boolean isAccountNonLocked() {
        return this.accountNonLocked;
    }

    public boolean isCredentialsNonExpired() {
        return this.credentialsNonExpired;
    }

    public List<Role> getAuthorities() {
        return this.authorities;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public void setAccountNonExpired(boolean accountNonExpired) {
        this.accountNonExpired = accountNonExpired;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }

    public void setCredentialsNonExpired(boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }

    public void setAuthorities(List<Role> authorities) {
        this.authorities = authorities;
    }

    public boolean equals(Object o) {
        if (o == this) return true;
        if (!(o instanceof User)) return false;
        final User other = (User) o;
        if (!other.canEqual((Object) this)) return false;
        final Object this$username = this.getUsername();
        final Object other$username = other.getUsername();
        if (this$username == null ? other$username != null : !this$username.equals(other$username)) return false;
        final Object this$nome = this.getNome();
        final Object other$nome = other.getNome();
        if (this$nome == null ? other$nome != null : !this$nome.equals(other$nome)) return false;
        final Object this$password = this.getPassword();
        final Object other$password = other.getPassword();
        if (this$password == null ? other$password != null : !this$password.equals(other$password)) return false;
        if (this.isEnabled() != other.isEnabled()) return false;
        if (this.isAccountNonExpired() != other.isAccountNonExpired()) return false;
        if (this.isAccountNonLocked() != other.isAccountNonLocked()) return false;
        if (this.isCredentialsNonExpired() != other.isCredentialsNonExpired()) return false;
        final Object this$authorities = this.getAuthorities();
        final Object other$authorities = other.getAuthorities();
        if (this$authorities == null ? other$authorities != null : !this$authorities.equals(other$authorities))
            return false;
        return true;
    }

    public int hashCode() {
        final int PRIME = 59;
        int result = 1;
        final Object $username = this.getUsername();
        result = result * PRIME + ($username == null ? 43 : $username.hashCode());
        final Object $nome = this.getNome();
        result = result * PRIME + ($nome == null ? 43 : $nome.hashCode());
        final Object $password = this.getPassword();
        result = result * PRIME + ($password == null ? 43 : $password.hashCode());
        result = result * PRIME + (this.isEnabled() ? 79 : 97);
        result = result * PRIME + (this.isAccountNonExpired() ? 79 : 97);
        result = result * PRIME + (this.isAccountNonLocked() ? 79 : 97);
        result = result * PRIME + (this.isCredentialsNonExpired() ? 79 : 97);
        final Object $authorities = this.getAuthorities();
        result = result * PRIME + ($authorities == null ? 43 : $authorities.hashCode());
        return result;
    }

    protected boolean canEqual(Object other) {
        return other instanceof User;
    }

    public String toString() {
        return "User(username=" + this.getUsername() + ", nome=" + this.getNome() + ", password=" + this.getPassword() + ", enabled=" + this.isEnabled() + ", accountNonExpired=" + this.isAccountNonExpired() + ", accountNonLocked=" + this.isAccountNonLocked() + ", credentialsNonExpired=" + this.isCredentialsNonExpired() + ")";
    }
}
