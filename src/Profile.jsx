import React from 'react';
import './App.css'; 

const Profile = () => {
    return (
        <div
             style={{backgroundImage:"https://png.pngtree.com/thumb_back/fh260/background/20240919/pngtree-a-background-of-orange-blue-and-yellow-gradients-with-gritty-appearance-image_16233934.jpg",
            backgroundSize:"Cover",}}>
        <div
            style={{
                
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
               // backgroundColor: "#f0f8ff",
            }}
        >
            <div
                style={{
                    
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                    width: "300px",
                }}
            >
                <img
                    src="https://media.licdn.com/dms/image/v2/D5635AQFuxGFW0jfSHg/profile-framedphoto-shrink_200_200/B56ZVSgRu6HQAc-/0/1740845948383?e=1743678000&v=beta&t=EYonKsmiMCaDYPXabegQ_zXUVj6zNTr9k9jh6Dlk7g8"
                    alt="Profile"
                    style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        marginBottom: "15px",
                    }}
                />
                <h2>Arjun M</h2>
                <p style={{ color: "gray", marginBottom: "15px" }}>
                    Profession : Chairman of Aranthangi<br/>
                    Party : Tamizhaga Vetri Kazhagam<br/>
                    Contact : 9876543210<br/>
                    Mail id : arjun123@gmail.com
                </p>
                <button
                    style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={()=> window.open(
                        "https://www.linkedin.com/in/arjun-muthuraja-103a9a2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                        "_blank"
                    )}
                >
                    Follow
                </button>
            </div>
        </div>
        </div>
    );
};

export default Profile;