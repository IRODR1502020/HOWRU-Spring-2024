import React from 'react';
import './bootstrap.css';

export default function MembershipSection() {
    return (
        <div class="container">
            <div class="text-center">
                <h3>Membership</h3>
                <p class="lead">Do you like our app? Try out the full version!</p>
            </div>
            
            <div class="row align-items-start">
                <div class="col">
                Basic
                </div>
                <div class="col">
                Balanced
                </div>
                <div class="col">
                Pro
                </div>
            </div>
        </div>
    )
}