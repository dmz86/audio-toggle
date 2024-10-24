# audio-toggle

This plugin allows users to switch between different audio output options on their Android or iOS devices, specifically between the earpiece (receiver) and the speakerphone. Ideal for apps involving audio calls or media playback, the plugin provides seamless control over the audio route, enhancing user experience by offering flexibility in choosing the desired output for audio.

## Install

```bash
npm install audio-toggle
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------

</docgen-api>
