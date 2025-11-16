# Deployment Guide

## Environment Variables Required

Before deploying, you need to set the following environment variables in your hosting platform (Vercel, Netlify, etc.):

### Required Environment Variables

1. **`MYFATOORAH_TOKEN`** (Required)
   - Your MyFatoorah API token
   - Get this from your MyFatoorah dashboard
   - **IMPORTANT**: Never commit this to git or expose it in client-side code

2. **`MYFATOORAH_API_URL`** (Optional)
   - MyFatoorah API base URL
   - **Production**: `https://api.myfatoorah.com`
   - **Test**: `https://apitest.myfatoorah.com` (default if not set)
   - Only set this if you want to use production API

3. **`NEXT_PUBLIC_SITE_URL`** (Recommended)
   - Your production website URL (e.g., `https://yourdomain.com`)
   - Used for payment callback URLs
   - Example: `https://worldhr-summit.com`

4. **`NEXT_PUBLIC_SUCCESS_URL`** (Optional)
   - Custom success page URL after payment
   - Defaults to `NEXT_PUBLIC_SITE_URL` if not set
   - Example: `https://yourdomain.com/success`

5. **`NEXT_PUBLIC_ERROR_URL`** (Optional)
   - Custom error page URL after payment failure
   - Defaults to `${NEXT_PUBLIC_SITE_URL}/error` if not set
   - Example: `https://yourdomain.com/error`

### Setting Environment Variables

#### Vercel

1. Go to your project dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable with its value
4. Select the environment (Production, Preview, Development)

#### Netlify

1. Go to Site settings → Environment variables
2. Add each variable with its value
3. Deploy settings will pick them up automatically

#### Other Platforms

- Add environment variables in your hosting platform's dashboard
- Ensure they're marked as "secret" or "encrypted" if available

## Pre-Deployment Checklist

- [ ] Set `MYFATOORAH_TOKEN` in production environment
- [ ] Set `MYFATOORAH_API_URL` to production URL (if using production API)
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Test payment flow in production environment
- [ ] Verify callback URLs are working correctly
- [ ] Ensure `.env.local` is NOT committed to git (check `.gitignore`)

## Security Notes

1. **Never commit `.env` files** - They should be in `.gitignore`
2. **Use production API tokens** - Don't use test tokens in production
3. **CORS settings** - Currently set to allow all origins (`*`). Consider restricting this in production if needed
4. **API tokens** - Should only be used server-side (in API routes)

## Testing After Deployment

1. Test the payment creation endpoint
2. Verify callback URLs redirect correctly
3. Check error handling works properly
4. Monitor logs for any API errors

## Troubleshooting

### Payment API returns 500 error

- Check that `MYFATOORAH_TOKEN` is set correctly
- Verify the token is valid and has necessary permissions
- Check API URL is correct (test vs production)

### Callback URLs not working

- Ensure `NEXT_PUBLIC_SITE_URL` is set to your production domain
- Verify the callback URLs are accessible (not blocked by firewall)
- Check that success/error pages exist on your site

### CORS errors

- If you need to restrict CORS, update the `Access-Control-Allow-Origin` header in `route.ts`
- Replace `'*'` with your specific domain(s)
