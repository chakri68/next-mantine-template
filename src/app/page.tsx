"use client";

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      maw={400}
      pos={"absolute"}
      top={"50%"}
      left={"50%"}
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Next.js template with Mantine</Text>
        <Badge color="pink">TypeScript</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Includes ESLint, Prettier and eslint-typescript
      </Text>

      <Link
        href={"https://github.com/chakri68/next-mantine-template"}
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <Button color="blue" fullWidth mt="md" radius="md">
          Try now
        </Button>
      </Link>
    </Card>
  );
}
