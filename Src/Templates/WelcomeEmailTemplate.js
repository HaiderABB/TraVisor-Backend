

const WelcomeEmailTemplate = (name) => `<table style="max-width: 660px ; border-collapse: collapse ; font-family: Helvetica Neue, Helvetica, Arial, Verdana, sans-serif" >
    <tbody>
      <tr>
        <td style="text-align: center;background-color: #1e516e;padding: 5%">
          <a>
            <img style=" width: 35% " src="https://res.cloudinary.com/dwxitwxzh/image/upload/v1721311489/vdvipqtg7f4ukqvctrpr.png"></img>
          </a>
        </td>
      </tr>
      <tr style="background-color: #ffffff ">
        <td style="padding: 2% 2% 2% ">
          <h1 style="text-align: center;line-height: 1;letter-spacing: -0.05rem;font-size: 20px;margin-top: 2%;color: #fa8b02">Welcome to TraVisor</h1>
        </td>
      </tr>
      <tr style="background-color: #ffffff">
        <td style="padding: 0% 3%; font-size: 16px;color: #000000; font-family: Helvetica Neue, Helvetica, Arial, Verdana, sans-serif;font-weight: normal;line-height: 1.5;letter-spacing: 0px;padding-bottom: 5% ">
          <p style=" text-align:left"> Dear ${name},</p>
          <p style="text-align: left"><strong>A Big Thank You!</strong> We're thrilled to have you on board! Signing up for TraVisor is the first step towards planning your dream trips, and we're honored that you chose us to be a part of your journey.
          </p>
          <p style="text-align: left"><strong>Exclusive Offers and Tips</strong> As a valued member of our community, you'll receive exclusive travel tips, discounts, and promotions to make your travels even more enjoyable. Keep an eye on your inbox for our regular newsletters, packed with inspiration and advice to help you explore the world.
          </p>
           <p style="text-align: left"><strong>We're Here to Help</strong> If you have any questions or need assistance, our friendly support team is just a click away. Reach out to us at  <a href="mailto: travel.travisor@gmail.com" style=" color: #FA8B02;text-decoration:underline ">support@TraVisor.org</a>, and we'll be happy to help.
          </p>
          <p style= "text-align: left; color: #fa8b02;font-size: 18px">
            <strong>Best Regards, The TraVisor Team</strong>
          </p>
        </td>
      </tr>
      <tr>
        <td style="background-color: #1e516e; text-align: center;padding:1%
        ">
          <p style="font-size: 12px; padding: 3%; color: #FA8B02">
            <strong>CONTACT US:
              <a href="mailto: travel.travisor@gmail.com" style=" color: #ffffff ">SUPPORT@TRAVISOR.ORG</a>
            </strong>
          </p>
        </td>
      </tr>
    </tbody>
  </table>`

module.exports = WelcomeEmailTemplate;