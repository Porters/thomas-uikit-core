import { Icon, type IconName } from "./components/ui/common/Icon";
import { Text } from "./components/ui/common/Text";
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';
function IconPreview() {
  const iconNames: IconName[] = [
    'filter', 'search', 'add', 'edit', 'delete', 'close', 'check',
    'arrow-down', 'arrow-up', 'arrow-left', 'pause', 'download',
    'arrow-down-select', 'home', 'list', 'file', 'task', 'company',
    'notification', 'user'
  ];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {iconNames.map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
          <Icon name={name} size={32} />
          <span style={{ fontSize: 12, marginTop: 8 }}>{name}</span>
        </div>
      ))}
    </div>
  );
}
import { useState } from 'react'
import './App.css'
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./components/ui/table";
import { Alert } from "./components/ui/alert";


function TypographyPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Text variant="h1" as="h1">Heading 1 (h1)</Text>
      <Text variant="h2" as="h2">Heading 2 (h2)</Text>
      <Text variant="h3" as="h3">Heading 3 (h3)</Text>
      <Text variant="h3-bold" as="h3">Heading 3 Bold</Text>
      <Text variant="h4" as="h4">Heading 4</Text>
      <Text variant="h5" as="h5">Heading 5</Text>
      <Text variant="body-l">Body Large</Text>
      <Text variant="body-m">Body Medium</Text>
      <Text variant="body-m-bold">Body Medium Bold</Text>
      <Text variant="body-s">Body Small</Text>
      <Text variant="label-l">Label Large</Text>
      <Text variant="label-m">Label Medium</Text>
      <Text variant="label-s">Label Small</Text>
      <Text variant="caption-l">Caption Large</Text>
      <Text variant="caption-m">Caption Medium</Text>
      <Text variant="button-l">Button Large</Text>
      <Text variant="button-m">Button Medium</Text>
      <Text variant="button-s">Button Small</Text>
    </div>
  );
}

function ComponentPreview() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button variant="default">Button</Button>
      <Input placeholder="Type here..." />
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>This is a dialog preview.</DialogDescription>
          </DialogHeader>
          <Button onClick={() => alert("Dialog action")}>Action</Button>
        </DialogContent>
      </Dialog>
      <Alert variant="default">This is an alert preview.</Alert>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>Preview</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Column 1</TableHead>
            <TableHead>Column 2</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Row 1, Cell 1</TableCell>
            <TableCell>Row 1, Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2, Cell 1</TableCell>
            <TableCell>Row 2, Cell 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}


function ColorPreview() {
  // Get the resolved Tailwind config
  const fullConfig = resolveConfig(tailwindConfig);
  // Get the color palette (flattened for preview)
  const colors = fullConfig.theme.colors || {};
  // Only show top-level color groups (ocean, volcano, etc.)
  const colorGroups = Object.entries(colors).filter(([k, v]) => typeof v === 'object');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {colorGroups.map(([group, shades]) => (
        <div key={group} style={{ marginBottom: 16, display: 'flex', alignItems: 'center' }}>
          <Text variant="h3" as="h3" style={{ minWidth: 120, textAlign: 'left', marginRight: 24 }}>{group}</Text>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            {Object.entries(shades).map(([shade, value]) => (
              <div key={shade} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: value, border: '1px solid #eee' }} />
                <span style={{ fontSize: 12, marginTop: 4 }}>{shade}</span>
                <span style={{ fontSize: 10, color: '#888' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState<'typography' | 'icon' | 'component' | 'color'>('typography');
  return (
    <div style={{ padding: 32 }}>
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, textAlign: 'left' }}>Thomas UIkit Core</h1>
      </header>
      <nav style={{ marginBottom: 24, display: 'flex', gap: 16 }}>
        <button onClick={() => setMenu('typography')} style={{ fontWeight: menu === 'typography' ? 'bold' : 'normal' }}>Typography</button>
        <button onClick={() => setMenu('icon')} style={{ fontWeight: menu === 'icon' ? 'bold' : 'normal' }}>Icons</button>
        <button onClick={() => setMenu('component')} style={{ fontWeight: menu === 'component' ? 'bold' : 'normal' }}>Components</button>
        <button onClick={() => setMenu('color')} style={{ fontWeight: menu === 'color' ? 'bold' : 'normal' }}>Colors</button>
      </nav>
      {menu === 'typography' && <TypographyPreview />}
      {menu === 'icon' && <IconPreview />}
      {menu === 'component' && <ComponentPreview />}
      {menu === 'color' && <ColorPreview />}
    </div>
  );
}

export default App
