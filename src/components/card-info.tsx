import React, { useEffect } from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import './card-info.scss';
import MovieIcons from './movie-icons';
import { Plugins } from "@capacitor/core";
import { useState } from 'react';
const { Device } = Plugins

interface CardInfoProps {
    color: string,
    name: string,
    icon?: string
    img?: string
}
const CardInfo: React.FC<CardInfoProps> = ({ color, name, icon, img }) => {
    const [platform, setPlatform] = useState<"ios" | "android" | "electron" | "web">('web')

    const checkDevice = async () => {
        const device = await Device.getInfo()
        setPlatform(device.platform)
    }

    useEffect(() => { checkDevice() })

    return (
        <IonCard className={`icon-card ion-text-center bk-white flat-card ${platform === 'web' ? 'ion-hover-card' : ''}`}>
            <IonCardHeader>
                <div className={`round-back ${color}`}>
                    {icon && <MovieIcons iconName={icon} />}
                    {img && <img src={img} alt="" />}
                </div>
            </IonCardHeader>

            <IonCardTitle>
                <p>{name}</p>
            </IonCardTitle>
        </IonCard>
    );
}

export default CardInfo;