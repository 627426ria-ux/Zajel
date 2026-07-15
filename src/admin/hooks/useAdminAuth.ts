import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase'; // src/admin/hooks -> src/supabase.ts

export function useAdminAuth() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, nofollow');

    const verify = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/admin/login');
        return;
      }
      setChecking(false);
    };
    verify();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate('/admin/login');
    });

    return () => {
      metaRobots?.setAttribute('content', 'index, follow');
      listener.subscription.unsubscribe();
    };
  }, [navigate]);

  const logout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return { checking, logout };
}