import { Container, Text, Title, Box, Group } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";

const Instruction = () => {
  return (
    <Container
      fluid
      style={{
        width: "100vw",
        height: "100vh", // Full viewport width and height
        padding: "0",
        margin: "0",
        backgroundColor: "#17171e", // Main background color
        color: "#EEEEEE", // Default text color
      }}
    >
      <Box
        style={{
          padding: "0 32px", // Horizontal padding
          maxWidth: "100%", // Ensure it fits within the screen
          marginLeft: "80px", // Adjust this to account for the sidebar width
        }}
      >
        {/* Title: "How to cut audio" */}
        <Title
          order={2}
          style={{
            fontSize: "38px", // Font size as requested
            color: "#EEEEEE", // Text color
            textAlign: "left", // Align left
            fontWeight: "500",
            fontFamily: "Source Sans Pro, sans-serif",
            marginBottom: "3rem", // Reducing font weight to make the heading thinner
          }}
        >
          How to cut audio
        </Title>

        {/* Paragraph with box background */}
        <Box
          style={{
            backgroundColor: "#1F1F28", // Background color
            borderRadius: "0px", // Remove border radius
            padding: "16px 32px", // Padding as specified
            marginBottom: "32px", // Space below this box
            borderLeft: "4px solid #665dc3", // Adding the vertical line on the left
          }}
        >
          <Text
            style={{
              fontSize: "23px", // Font size as requested
              color: "#D8D8E2", // Font color for paragraphs
              margin: "20.696px 0 32px", // Margin as requested
              lineHeight: "1.8", // Adjusted line height for readability
            }}
          >
            This app can be used to trim and/or cut audio tracks, remove audio fragments. Fade in and fade out your music easily to make the audio harmoniously.
            <br />
            <br />
            It is fast and easy to use. You can save the audio file in any format (codec parameters are configured).
            <br />
            <br />
            It works directly in the browser, no need to install any software, and is available for mobile devices.
          </Text>
        </Box>

        {/* Subtitle: Privacy and Security */}
        <Group  style={{ marginBottom: "8px" }}>
          <IconLock size={30} />
          <Text
            style={{
              fontSize: "24px", // Font size for h4
              fontWeight: "600", // Bold subtitle
              color: "#EEEEEE", // Color as per request
            }}
          >
            Privacy and Security Guaranteed
          </Text>
        </Group>

        {/* Second paragraph */}
        <Box
          style={{
            backgroundColor: "#1F1F28", // Background color for box
            borderRadius: "0px", // No border radius
            padding: "16px 32px", // Padding as requested
            borderLeft: "4px solid #665dc3",
            marginTop: "2rem", // Adding the vertical line on the left
          }}
        >
          <Text
            style={{
              fontSize: "23px", // Same font size as the first paragraph
              color: "#D8D8E2", // Same font color as the first paragraph
            }}
          >
            This is a serverless app. Your files do not leave your device.
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Instruction;
