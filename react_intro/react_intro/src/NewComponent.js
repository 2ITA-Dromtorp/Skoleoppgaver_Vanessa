
function MyButton () {
    
    return (
        <button>
            I'm a button
        </button>
    );

}

export default function MyApp () {
    return (
        <div>
            <h1>Welcome to my App</h1>
            <MyButton />
        </div>
    );
}

export function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </>
    );
  }

  