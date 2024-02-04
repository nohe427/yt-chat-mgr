import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"yt-chat-section","appId":"1:275285882972:web:d3e8b06bfa87526c084e99","storageBucket":"yt-chat-section.appspot.com","apiKey":"AIzaSyBAl4IrLR5n8lyQt44dphWVliiadLBAZGo","authDomain":"yt-chat-section.firebaseapp.com","messagingSenderId":"275285882972"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
