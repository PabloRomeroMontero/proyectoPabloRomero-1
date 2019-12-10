import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UsuarioModel} from '../model/usuario-model';
import {NewModel} from '../model/new-model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private url_crud = 'https://proyectoromeronews.firebaseio.com/';
  private url_login = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apiKey = 'AIzaSyAVUBpsE-sRNzPx3BwbLRqBvXPleYny_zQ';
  private userToken: string;

  constructor(private http: HttpClient) {
  }

  borrarNoticia(id: string) {
    return this.http.delete(`${this.url_crud}/news/${id}.json`);
  }

  crearNoticia(news: NewModel) {
    return this.http.post(`${this.url_crud}/news.json`, news)
      .pipe(
        map((resp: any) => {
          news.id = resp.name;
          return news;
        }));
  }

  actualizarNoticia(news: NewModel) {
    const newsTemporal = {
      ...news
    };
    delete newsTemporal.id;
    return this.http.put(`${this.url_crud}/news/${news.id}.json`, newsTemporal);
  }

  getNews() {
    return this.http.get(`${this.url_crud}/news.json`)
      .pipe(
        map(this.createArray)
      );
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url_login}:signUp?key=${this.apiKey}`, authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['token']);
        return resp;
      })
    );
  }


  login(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url_login}:signInWithPassword?key=${this.apiKey}`, authData
    );
  }


  guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('toke');
    } else {
      this.userToken = '';
    }
  }

  private createArray(newsObj: object) {
    const newsList: NewModel[] = [];

    if (newsObj === null) {
      return [];
    }
    Object.keys(newsObj).forEach(key => {
      const ne: NewModel = newsObj[key];
      ne.id = key;
      newsList.push(ne);
    });
    return newsList;
  }

  comprobarEstarAutenticado() {
    return this.userToken.length > 2;
  }
}
