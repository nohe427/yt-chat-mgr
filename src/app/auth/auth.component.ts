import { Component, Signal, signal } from '@angular/core';
import { Auth, GoogleAuthProvider, User, authState, signInWithPopup } from '@angular/fire/auth';
import { EMPTY, Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  private readonly userDisposable: Subscription|undefined;
  public readonly user: Observable<User | null> = EMPTY;
  isLoggedIn$ = signal(false);
  
  constructor(private auth: Auth) {
   this.user = authState(this.auth);
   this.userDisposable = authState(this.auth).pipe(
      map(u => !!u)
    ).subscribe(isLoggedIn => {
      if (isLoggedIn) {
        console.log('Logged in');
        this.isLoggedIn$.update(() => true);
      } else {
        console.log('Logged out');
        this.isLoggedIn$.update(() => false);
      }
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.userDisposable?.unsubscribe();
  }

  login() {
    const gap = new GoogleAuthProvider();
    gap.addScope('https://www.googleapis.com/auth/youtube.readonly');
    signInWithPopup(this.auth, gap);
  }

  logout() {
    this.auth.signOut();
  }

}
