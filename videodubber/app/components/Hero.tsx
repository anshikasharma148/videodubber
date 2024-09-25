
import { Title, Text, Button, Container, Group } from "@mantine/core";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13 App Router

const Hero = () => {
  const router = useRouter(); // Next.js 13 App Router navigation

  // Function to handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Safely accessing the file
    if (file) {
      // Redirect to the audio cutting page and pass the file as a query parameter
      const url = `/audio-cutter?fileName=${encodeURIComponent(file.name)}`;
      router.push(url); // Use router.push in App Router
    }
  };

  // Function to trigger the file input click
  const handleBrowseClick = () => {
    document.getElementById("file-input")?.click();
  };

  return (
    <Container
      fluid
      style={{
        height: "100vh",
        width: "100vw",
        margin: "0",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#17171e",
      }}
    >
      <Group
         // Changed spacing to a predefined value
        style={{
          marginBottom: "40px",
        }}
      >
        <Text
          component="a"
          href="#"
          style={{
            color: "#EEEEEE",
            fontSize: "14px",
            fontFamily: "Source Sans Pro, sans-serif",
            padding: "0 6px",
            letterSpacing: "0.05em",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          HOW IT WORKS
        </Text>
        <Text
          component="a"
          href="#"
          style={{
            color: "#EEEEEE",
            fontSize: "14px",
            fontFamily: "Source Sans Pro, sans-serif",
            padding: "0 16px",
            letterSpacing: "0.05em",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          JOINER
        </Text>
      </Group>

      <Title
        order={1}
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          color: "#EEEEEE",
          fontFamily: "Source Sans Pro, sans-serif",
          marginBottom: "20px",
        }}
      >
        Audio Cutter
      </Title>

      <Text
        style={{
          fontSize: "25px",
          color: "#D8D8E2",
          fontFamily: "Source Sans Pro, sans-serif",
          marginBottom: "32px",
        }}
      >
        Free editor to trim and cut any audio file online
      </Text>

      {/* Hidden file input */}
      <input
        id="file-input"
        type="file"
        accept="audio/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <Button
        radius="xl"
        size="md"
        variant="outline"
        style={{
          borderColor: "#665dc3",
          color: "#EEEEEE",
          padding: "12px 20px",
          fontFamily: "Source Sans Pro, sans-serif",
          fontSize: "16px",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
        onClick={handleBrowseClick}
      >
        Browse my files
      </Button>
    </Container>
  );
};

export default Hero;
