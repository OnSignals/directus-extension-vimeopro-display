# Vimeo Pro Directus display extension

Directus extension that adds a display for the [Directus Vimeo Pro interface extension](https://github.com/OnSignals/directus-extension-vimeopro).

### Usage

1. Create the directory `/extensions/displays` in your project directory.
2. Clone this repo into `/extensions/displays`.
3. Run

```bash
cd extensions/displays/directus-extension-vimeopro-display
npm install
npm run build
```

4. Add a volume to the directus container in your `docker-compose.yml`

```yaml
volumes:
  - ./extensions/displays/directus-extension-vimeopro-display/dist:/directus/extensions/displays/directus-extension-vimeopro-display
```

5. Add or modify the `CONTENT_SECURITY_POLICY_DIRECTIVES__IMG_SRC` env variable in your directus instance to allow vimeo's thumbnails to be displayed in the UI

```bash
CONTENT_SECURITY_POLICY_DIRECTIVES__IMG_SRC="'self' data: blob: https://cdn.directus.io https://*.vimeo.com https://*.vimeocdn.com"
```

6. Add the field to your project
