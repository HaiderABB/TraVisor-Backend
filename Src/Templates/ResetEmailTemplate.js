const ForgotPasswordLink = require('../Config/links')

const ResetEmailTemplate = (name, token) =>
  `<table style="max-width: 660px ; border-collapse: collapse ; font-family: Helvetica Neue, Helvetica, Arial, Verdana, sans-serif" >
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
          <h1 style="text-align: center;line-height: 1;letter-spacing: -0.05rem;font-size: 20px;margin-top: 2%;color: #fa8b02">Reset Password Request</h1>
        </td>
      </tr>
      <tr style="background-color: #ffffff">
        <td style="padding: 0% 3%; font-size: 16px;color: #000000; font-family: Helvetica Neue, Helvetica, Arial, Verdana, sans-serif;font-weight: normal;line-height: 1.5;letter-spacing: 0px;padding-bottom: 5% ">
          <p style=" text-align:left"> Dear ${name},</p>
          <p style="text-align: left">You have requested to reset your password. To complete the process, please click on the following link:
            <a target='_blank' href=${ForgotPasswordLink + token} rel="noopener">
<span style="color: #fa8b02; text-decoration: underline">Reset Password</span>
            </a > <p>If you did not request a password reset, please ignore this email.</p>
          </p >
  <p style="text-align: left; color: #fa8b02;font-size: 18px">
    <strong>Team Travisor</strong>
  </p>
        </td >
      </tr >
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
    </tbody >
  </table > `

module.exports = ResetEmailTemplate;