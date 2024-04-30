import photo from "../assets/security.png";
import review from "../assets/review.jpeg";

const Extra2 = () => {
  return (
    <div className="pl-14 lg:pl-2 max-w-6xl mx-auto">
    <h2 className="text-center font-bold text-2xl lg:text-5xl text-green-500 mb-6">Our Security and Reviewers</h2>
    <div className=" gap-5 flex flex-col lg:flex-col mb-6">
      
      {/* Reviewers Section */}
      <div className="flex-1 shadow-2xl p-4 mb-4 rounded-lg border">
        <p className="text-4xl  text-center font-semibold mb-8">Reviewers</p>
        <div className="flex justify-center">
        <img className="rounded-lg" src={review} alt="" />
        </div>
        <div className="flex-1 mt-7 shadow-2xl p-4 rounded-lg border">
          <div className="p-2 bg-yellow-200 rounded-lg">
            <p className="text-xl font-semibold">User Reviews and Feedback:</p>
            <p>Describe how the website allows users to leave reviews and feedback about tourist spots, experiences, or other users.</p>
          </div>
          <div className="p-2 mb-3 mt-3 bg-yellow-200 rounded-lg">
            <p className="text-xl font-semibold">Review Moderation and Verification:</p>
            <p>Explain the process for moderating user reviews to ensure they meet community standards. Describe how reviews are verified for authenticity to avoid fake or misleading feedback.</p>
          </div>
          <div className="p-2 bg-yellow-200 rounded-lg">
            <p className="text-xl font-semibold">Transparency and Accountability:</p>
            <p>Highlight how the website promotes transparency through user reviews and feedback, allowing other users to make informed decisions based on community experiences.</p>
          </div>
        </div>
      </div>
      
      {/* Security Section */}
      <div className="flex-1 shadow-2xl p-4 rounded-lg border">
        <p className="text-4xl  text-center font-semibold mb-8">Security</p>
        <div className="flex justify-center">
        <img className="rounded-lg" src={photo} alt="" />
        </div>
        <div className="flex-1 mt-4 shadow-2xl p-4 rounded-lg border">
          <div className="p-2 bg-yellow-200 rounded-lg">
            <p className="text-xl font-semibold">User Data Protection</p>
            <p>Our security measures include encryption protocols, secure data storage, and anonymization to ensure user data protection.</p>
          </div>
          <div className="p-2 mb-3 mt-3 bg-yellow-200 rounded-lg">
            <p className="text-xl font-semibold">Secure User Authentication</p>
            <p>We ensure secure access through methods like email/password authentication, OAuth with third-party providers, and Multi-Factor Authentication (MFA).</p>
          </div>
          <div className="p-2 bg-yellow-200 rounded-lg">
            <p className="text-xl font-semibold">Private Routes and Protected Content</p>
            <p>Private routes and protected content require proper authorization, ensuring sensitive or private information is accessible only to authorized users.</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  );
};

export default Extra2;
