# @vic/ui

Local UI component library for Victoria Plumbing.

Scripts:

- `pnpm dev:storybook` — run Storybook locally
- `pnpm build:storybook` — build static Storybook site
- `pnpm test` — run unit tests (Vitest)

Usage from workspace apps:

- Ensure your root uses pnpm or npm workspaces and this package is included as `packages/ui`.
- Import components: `import { VPButton, VPInput, VPCheckbox } from '@vic/ui'`

## Migration Guide v1.0.0

**Breaking Change:** All components have been renamed with a `VP` prefix.

### Component Naming Changes

- `Button` → `VPButton`
- `Input` → `VPInput`
- `Checkbox` → `VPCheckbox`
- `ProductCard` → `VPProductCard`
- `ProductInfo` → `VPProductInfo`
- `FilterSidebar` → `VPFilterSidebar`
- `ProductGrid` → `VPProductGrid`

### Before

```tsx
import { Button, Input, Checkbox } from '@vic/ui';

<Button>Click me</Button>
```

### After

```tsx
import { VPButton, VPInput, VPCheckbox } from '@vic/ui';

<VPButton>Click me</VPButton>
```

### Additional Changes

- All components now include `displayName` property for better debugging
- Story files use modern `satisfies` syntax for improved type inference
- All molecules and organisms are now exported from the package
