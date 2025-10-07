
export default {
  async afterCreate(event) {    // Connected to "Save" button in admin panel
    const { result } = event;
    console.log(result)
    try{
      await strapi.plugins['email'].services.email.send({
        to: result.email,
        from: 'halejandro393@gmail.com', // e.g. single sender verification in SendGrid
        subject: 'The Strapi Email feature worked successfully',
 
        html: 'Hello world!', 
      })
    } catch(err) {
      console.log(err);
    }
  }
}
