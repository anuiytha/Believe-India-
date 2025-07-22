import { useState } from 'react';
import { AvatarCreator } from '@readyplayerme/react-avatar-creator';
import { Avatar } from '@readyplayerme/visage';

const config = {
    clearCache: true,
    bodyType: 'fullbody',
    quickStart: false,
    language: 'en',
};

const style = {
    width: '100%',
    height: '100vh',
    border: 'none',
};

export default function AvatarPage() {
    const [avatarUrl, setAvatarUrl] = useState('');

    const handleOnAvatarExported = (event) => {
        if (event?.data?.url) {
            setAvatarUrl(event.data.url);
        } else {
            console.warn('No avatar URL found in export event:', event);
        }
    };

    return (
        <>
            <AvatarCreator
                subdomain="avatar-testing-sj37ej" // ✅ Use subdomain only, not full URL
                config={config}
                style={style}
                onAvatarExported={handleOnAvatarExported}
            />
            {avatarUrl && (
                <Avatar
                    modelSrc={avatarUrl}
                    style={{ width: '100%', height: '600px' }}
                    cameraInitialDistance={10}
                />
            )}
        </>
    );
}
