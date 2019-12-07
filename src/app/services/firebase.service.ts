import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UsuarioModel} from '../model/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apiKey = 'AIzaSyAVUBpsE-sRNzPx3BwbLRqBvXPleYny_zQ';

  constructor(private http: HttpClient) {
  }

  // https://https://www.googleapis.com/identitytoolkit/v3/relyingparty/sig
  //   nupNewUser?key=[API_KEY]

  // https://https://www.googleapis.com/identitytoolkit/v3/relyingparty/ver
  //   ifyPassword?key=[API_KEY]

  salir() {
  }


  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}:signUp?key=${this.apiKey}`, authData
    );
  }


  login(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}:signInWithPassword?key=${this.apiKey}`, authData
    );
  }
}
