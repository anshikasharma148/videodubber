import { IconScissors, IconTrash } from '@tabler/icons-react';

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: '#1a1b1e',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          flexDirection: 'column',
          paddingTop: '40px',
        }}
      >
        {/* Image section */}
        <img
          src="/assets/waveform.png"
          alt="Waveform"
          style={{ width: '1200px', height: 'auto', marginBottom: '15px', marginLeft:'2rem' }}
        />

        {/* Cut, Remove, and Arrow buttons positioned below and right-aligned */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '8px',
            justifyContent: 'flex-end', // Align buttons to the right
            width: '1200px', // Match image width to ensure buttons align on the right side
            marginTop: '10px', // Adjust space between image and buttons
          }}
        >
          {/* Cut Button */}
          <button
            style={{
              width: '80px',
              height: '44.8px',
              backgroundColor: '#262633',
              color: '#cccccc', // Set to grey instead of white
              fontSize: '1rem',
              padding: '6.4px 12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '4px',
              border: 'none',
            }}
          >
            <IconScissors style={{ width: '16px', height: '16px' }} />
            <span style={{ fontSize: '1rem' }}>Cut</span>
          </button>

          {/* Remove Button */}
          <button
            style={{
              width: '120px',
              height: '44.8px',
              backgroundColor: '#262633',
              color: '#cccccc', // Set to grey instead of white
              fontSize: '1rem',
              padding: '6.4px 12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '4px',
              border: 'none',
            }}
          >
            <IconTrash style={{ width: '16px', height: '16px' }} />
            <span style={{ fontSize: '1rem' }}>Remove</span>
          </button>

          {/* Left Curved Arrow Button */}
          <button
            style={{
              width: '44.8px',
              height: '44.8px',
              backgroundColor: '#262633',
              color: '#cccccc', // Set to grey instead of white
              fontSize: '1rem', // Font size 1rem
              padding: '6.4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '4px',
              border: 'none',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-corner-left-up"
            >
              <polyline points="14 9 9 4 4 9"></polyline>
              <path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>
            </svg>
          </button>

          {/* Right Curved Arrow Button */}
          <button
            style={{
              width: '44.8px',
              height: '44.8px',
              backgroundColor: '#262633',
              color: '#cccccc', // Set to grey instead of white
              fontSize: '1rem', // Font size 1rem
              padding: '6.4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '4px',
              border: 'none',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-corner-right-up"
            >
              <polyline points="10 9 15 4 20 9"></polyline>
              <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
            </svg>
          </button>
        </div>

        {/* Play and Rewind buttons at the bottom-left corner */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* Play Button with border radius */}
          <button
            style={{
              width: '127.88px',
              height: '48px',
              backgroundColor: '#262633',
              color: '#EEEEEE',
              borderRadius: '2rem', // Border radius of 2rem for Play button
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: 'none',
              marginLeft:'4rem',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-play"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>

          {/* Rewind Button with only icon */}
          <button
            style={{
              width: '48px',
              height: '48px',
              backgroundColor: 'transparent',
              color: '#EEEEEE',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: 'none',
              borderRadius: '0', // No border radius for the rewind button
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-rewind"
            >
              <polygon points="11 19 2 12 11 5 11 19"></polygon>
              <polygon points="22 19 13 12 22 5 22 19"></polygon>
            </svg>
          </button>
        </div>

        {/* Format and Save buttons at the bottom-right corner */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            display: 'flex',
            gap: '12px',
          }}
        >
          {/* Format MP3 Button */}
          <button
            style={{
              width: '136.13px',
              height: '48px',
              backgroundColor: '#262633',
              color: '#EEEEEE',
              fontSize: '16px',
              padding: '4.4px 22px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '2rem', // Border radius of 2rem for Format button
              border: 'none',
            }}
          >
            <span style={{ color: '#EEEEEE', fontSize: '16px' }}>format: </span>
            <span style={{ color: '#00FF8E', fontSize: '16px' }}>mp3</span>
          </button>

          {/* Save Button */}
          <button
            style={{
              width: '127.88px',
              height: '48px',
              backgroundColor: '#D3D3DF',
              color: '#EEEEEE',
              fontSize: '16px',
              padding: '6.4px 24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '2rem', // Border radius of 2rem for Save button
              border: 'none',
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
