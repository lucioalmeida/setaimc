package br.com.seta.setaimc.model;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Role implements GrantedAuthority {

    @Id
    private String authority;

    private String descricao;

    public Role() {
    }

    public String getAuthority() {
        return this.authority;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public boolean equals(Object o) {
        if (o == this) return true;
        if (!(o instanceof Role)) return false;
        final Role other = (Role) o;
        if (!other.canEqual((Object) this)) return false;
        final Object this$authority = this.getAuthority();
        final Object other$authority = other.getAuthority();
        if (this$authority == null ? other$authority != null : !this$authority.equals(other$authority)) return false;
        final Object this$descricao = this.getDescricao();
        final Object other$descricao = other.getDescricao();
        if (this$descricao == null ? other$descricao != null : !this$descricao.equals(other$descricao)) return false;
        return true;
    }

    public int hashCode() {
        final int PRIME = 59;
        int result = 1;
        final Object $authority = this.getAuthority();
        result = result * PRIME + ($authority == null ? 43 : $authority.hashCode());
        final Object $descricao = this.getDescricao();
        result = result * PRIME + ($descricao == null ? 43 : $descricao.hashCode());
        return result;
    }

    protected boolean canEqual(Object other) {
        return other instanceof Role;
    }

    public String toString() {
        return "Role(authority=" + this.getAuthority() + ", descricao=" + this.getDescricao() + ")";
    }
}
