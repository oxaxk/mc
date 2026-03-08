import React, { useEffect, useState } from 'react';

type ConsentStatus = 'accepted' | 'rejected' | 'unset';

const STORAGE_KEY = 'cookie-consent-v1';

function getInitialStatus(): ConsentStatus {
  if (typeof window === 'undefined') return 'unset';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'accepted' || stored === 'rejected') return stored;
  return 'unset';
}

export default function CookieBanner() {
  return null;
}
