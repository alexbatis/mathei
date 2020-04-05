import React from "react";
import { IonLoading, IonToast } from "@ionic/react";


export const loadingIndicator = (isOpen, message) => <IonLoading isOpen={isOpen} message={message} />
export const errorToast = (error?: Error, duration = 2000) =>
  <IonToast
    isOpen={(error !== null && error !== undefined)}
    message={error?.message || 'An Error Occurred'}
    duration={duration} />
export const genericToast = (isOpen: boolean, message: string, duration = 2000) =>
  <IonToast
    isOpen={isOpen}
    message={message}
    duration={duration} />