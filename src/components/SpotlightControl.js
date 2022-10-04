import { Button, Group } from "@mantine/core";
import { openSpotlight } from "@mantine/spotlight";

function SpotlightControl() {
  return (
    <Group position="center">
      <Button
        radius="md"
        size="lg"
        variant="gradient"
        gradient={{ from: "teal", to: "blue", deg: 60 }}
        onClick={() => openSpotlight()}
      >
        Open spotlight
      </Button>
    </Group>
  );
}

export default SpotlightControl;
