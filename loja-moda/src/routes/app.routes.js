import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { LayoutComponent } from '../components/layout';
import { ModaFemale } from '../pages/moda_feminina';
import { ModaMen } from '../pages/modaMasculina';
import { ModaChild } from '../pages/modaInfantil';
export function AppRoutes() {
  return (
    <LayoutComponent>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/feminina" component={ModaFemale} />
        <Route path="/masculino" component={ModaMen} />
        <Route path="/crianca" component={ModaChild} />
      </Switch>
    </LayoutComponent>
  );
}
