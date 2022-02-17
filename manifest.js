{
    "background_color": "#ffffff",
    "categories": [
    "social",
    "news",
    "magazines"
    ],
    "description": "Get breaking news, politics, trending music, world events, sports scores, and the latest global news stories as they unfold - all with less data.",
    "display": "standalone",
    "gcm_sender_id": "49625052041",
    "gcm_user_visible_only": true,
    "icons": [],
    "name": "Twitter",
    "screenshots": [
    {
    "src": "https://abs.twimg.com/responsive-web/client-web/twitter-lite-data-saver-marketing.68059865.png",
    "sizes": "586x1041",
    "type": "image/png"
    },
    {
    "src": "https://abs.twimg.com/responsive-web/client-web/twitter-lite-explore-marketing.fd45b025.png",
    "sizes": "586x1041",
    "type": "image/png"
    },
    {
    "src": "https://abs.twimg.com/responsive-web/client-web/twitter-lite-timeline-marketing.befcdb45.png",
    "sizes": "586x1041",
    "type": "image/png"
    }
    ],
    "share_target": {
    "action": "compose/tweet",
    "enctype": "multipart/form-data",
    "method": "POST",
    "params": {
    "title": "title",
    "text": "text",
    "url": "url",
    "files": [
    {
    "name": "externalMedia",
    "accept": [
    "image/jpeg",
    "image/png",
    "image/gif",
    "video/quicktime",
    "video/mp4"
    ]
    }
    ]
    }
    },
    "shortcuts": [
    {
    "name": "New Tweet",
    "url": "/compose/tweet?utm_source=jumplist&utm_medium=shortcut",
    "icons": [
    {
    "src": "https://abs.twimg.com/responsive-web/client-web/icon-compose.12384425.png",
    "type": "image/png",
    "sizes": "192x192"
    }
    ]
    },
    {
    "name": "Explore",
    "url": "/explore?utm_source=jumplist&utm_medium=shortcut",
    "icons": [
    {
    "src": "https://abs.twimg.com/responsive-web/client-web/icon-search-stroke.5f9aa885.png",
    "type": "image/png",
    "sizes": "192x192"
    }
    ]
    },
    {
    "name": "Notifications",
    "url": "/notifications?utm_source=jumplist&utm_medium=shortcut",
    "icons": [
    {
    "src": "https://abs.twimg.com/responsive-web/client-web/icon-notifications-stroke.429602d5.png",
    "type": "image/png",
    "sizes": "192x192"
    }
    ]
    },
    {
    "name": "Direct Messages",
    "url": "/messages?utm_source=jumplist&utm_medium=shortcut",
    "icons": [
    {
    "src": "https://abs.twimg.com/responsive-web/client-web/icon-messages-stroke.5f95edc5.png",
    "type": "image/png",
    "sizes": "192x192"
    }
    ]
    }
    ],
    "short_name": "Twitter",
    "start_url": "https://twitter.com/?utm_source=homescreen&utm_medium=shortcut",
    "theme_color": "#ffffff",
    "scope": "/",
    "android_package_name": "com.twitter.android",
    "prefer_related_applications": true,
    "related_applications": [
    {
    "id": "com.twitter.android",
    "platform": "chromeos_play",
    "url": "https://play.google.com/store/apps/details?id=com.twitter.android"
    }
    ],
    "launch_handler": {
    "route_to": "existing-client",
    "navigate_existing_client": "never"
    }
    }